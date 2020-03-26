import csv
data = {
    "areas": set(),
    "categories": set()
}
with open('data.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    switch = True
    for row in reader:
        if switch:
            switch = False
            continue
        area = row[1]
        if area == "":
            continue
        if area not in data["areas"]:
            data["areas"].add(area)
        cat = row[4]
        if cat not in data["categories"]:
            data["categories"].add(cat)
        if data.get(area):
            if not data[area].get(cat):
                data[area][cat] = [{
                    "vendorName": row[2],
                    "address": row[3],
                    "ph1": row[5],
                    "ph2": row[6]
                }]
            else:
                data[area][cat].append({
                    "vendorName": row[2],
                    "address": row[3],
                    "ph1": row[5],
                    "ph2": row[6]
                })
        else:
            data[area] = {}
            data[area][cat] = [{
                "vendorName": row[2],
                "address": row[3],
                "ph1": row[5],
                "ph2": row[6]
            }]
data["areas"] = list(data["areas"])
data["categories"] = list(data["categories"])
import json
r = json.dumps(data)
print("export const data = "+r)