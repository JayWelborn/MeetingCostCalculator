import csv
import json


def main():
    with open('ammo_price.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")

        ammo_types = []
        encountered = set()

        for row in csv_reader:
            if row[0] not in encountered:
                ammo_types.append({"label": row[0], "value": row[1][1:]})
            encountered.add(row[0])

        write_json_file("ammo_table.js", ammo_types)


def write_json_file(filename, contents):
    with open(filename, 'w') as out_file:
        out_file.write("export default\n")
        json.dump(contents, out_file)


if __name__ == '__main__':
    main()
