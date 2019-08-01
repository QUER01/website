import datapackage
import pandas as pd

data_url = 'https://datahub.io/core/s-and-p-500-companies/datapackage.json'
#<iframe src="https://datahub.io/core/s-and-p-500-companies-financials/r/0.html" width="100%" height="100%" frameborder="0"></iframe>
# to load Data Package into storage
package = datapackage.Package(data_url)

# to load only tabular data
resources = package.resources
for resource in resources:
    if resource.tabular:
        data = pd.read_csv(resource.descriptor['path'])
        print (data.head(10))




