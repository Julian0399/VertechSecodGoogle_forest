import os
from google.cloud import bigquery

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "backend\cloudforest.json"

client = bigquery.Client()
sql_query = """
SELECT county_code, state_code, estimation_unit, location_name 
FROM `bigquery-public-data.usfs_fia.population` LIMIT 20
"""

query_job = client.query(sql_query)

for row in query_job.result():
    # Acceder directamente a los valores de la tupla dentro de cada fila
    county_code = row[0]
    state_code = row[1]
    estimation_unit = row[2]
    location_name = row[3]

    print(f"County Code: {county_code}, State Code: {state_code}, Estimation Unit: {estimation_unit}, Location Name: {location_name}")