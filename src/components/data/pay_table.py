import csv
import json


def main():
    with open('pay_table.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")

        first_row = next(csv_reader)

        pay_dict = {}
        ranks = []
        service_years = []

        for item in first_row[1:]:
            service_years.append(item)

        for row in csv_reader:
            pay_dict[row[0]] = {}
            ranks.append(row[0])
            for i in range(1, len(row)):
                if row[i] != '\xa0':
                    pay_dict[row[0]][first_row[i]] = float(row[i])
                else:
                    pay_dict[row[0]][first_row[i]] = None

        write_json_file("pay_table.js", pay_dict)
        write_json_file("service_years.js", service_years)
        write_json_file("ranks.js", ranks)


def write_json_file(filename, contents):
    with open(filename, 'w') as out_file:
        out_file.write("export default\n")
        json.dump(contents, out_file)


if __name__ == '__main__':
    main()
