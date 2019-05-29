import csv
import json


def main():
    with open('ammo_price.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")

        ammo_dict = {}

        for row in csv_reader:
            if row[0] not in ammo_dict.keys():
                ammo_dict[row[0].strip()] = row[1].strip()

        write_json_file("ammo_table.js", ammo_dict)


def write_json_file(filename, contents):
    with open(filename, 'w') as out_file:
        out_file.write("export default\n")
        json.dump(contents, out_file, sort_keys=True, indent=2)


if __name__ == '__main__':
    main()
