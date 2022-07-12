from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# download dataset from here
df = pd.read_csv("supermarket_sales.csv")
df.head()

df["Date"] = pd.to_datetime(df["Date"])
df.dtypes

df["Hour"] = pd.to_datetime(df["Time"]).dt.hour
df.dtypes

async def univariate_data_analysis(groupby: str, interested_column: str, title: str):
  groupby_data = df.groupby(groupby)[interested_column].sum().sort_values(ascending=False)
  label_names = groupby_data.index.tolist()
  data = groupby_data.values.tolist()
  return_data = {"labels": label_names, "data": data, "label": title}
  return return_data

async def get_shooping_hour_data():
    bins = [0, 12, 18, 24]
    labels = ['Morning', 'Day time', 'Evening']
    df["Day time"] = pd.cut(x = df['Hour'], bins = bins, labels = labels, include_lowest = True)
    shopping_time = df.groupby("Branch")["Day time"].value_counts()

    final_shopping_time_data = {"labels": ["Branch A", "Branch B", "Branch C"], "label": "Shopping Hours By Branch"}

    for i, index in enumerate(["A", "B", "C"]):
        result = {"label": labels[i], "data": shopping_time[index].tolist()}
        final_shopping_time_data[index] = result

    return final_shopping_time_data


@app.get("/")
async def read_root():
    # sales per branch
    total_sales_per_branch = await univariate_data_analysis("Branch", "Total", "Total Sales Per Branch")

    # sale by gender
    sales_by_gender = await univariate_data_analysis("Gender", "Total", "Sales By Gender")

    # gross profit by branch
    gross_income_data = await univariate_data_analysis("Branch", "gross income", "Gross Profit By Branch")

    # product line by sales
    product_line_by_total_sales = await univariate_data_analysis("Product line", "Total", "Product Line By Total Sales")

    # product line by gross profit
    product_line_by_gross_income= await univariate_data_analysis("Product line", "gross income", "Product Line By Gross Income")

    # product line by rating
    product_line_by_rating = await univariate_data_analysis("Product line", "Rating", "Product Line By Rating")

    # payment method
    payment_methods = await univariate_data_analysis("Payment", "Total", "Payment Method By Total Payment")

    # product line by quantity
    product_line_by_quantity = await univariate_data_analysis("Product line", "Quantity", "Product Line By Quantity")

    # busy hours data
    shooping_hour_data = await get_shooping_hour_data()

    return {"data": {
        "total_sales_per_branch": total_sales_per_branch,
        "sales_by_gender": sales_by_gender,
        "gross_income_data": gross_income_data,
        "product_line_by_total_sales": product_line_by_total_sales,
        "product_line_by_gross_income": product_line_by_gross_income,
        "product_line_by_rating": product_line_by_rating,
        "payment_methods": payment_methods,
        "product_line_by_quantity": product_line_by_quantity,
        "shooping_hour_data": shooping_hour_data
    }}

