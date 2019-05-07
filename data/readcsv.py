import csv
import json


with open('pay_table.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=",")

    first_row = next(csv_reader)

    pay_dict = {}

    for row in csv_reader:
        pay_dict[row[0]] = {}
        for i in range(1, len(row)):
            if row[i] != '\xa0':
                pay_dict[row[0]][first_row[i]] = float(row[i])
            else:
                pay_dict[row[0]][first_row[i]] = None

    with open('pay_table.json', 'w') as out_file:
        json.dump(pay_dict, out_file, indent=2)
