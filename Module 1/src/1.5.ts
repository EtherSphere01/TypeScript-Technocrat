// Reference type --> object

const user: {
  company: "Naimur Inc."; //--> literal type
  firstName: string;
  middleName?: string; // optional property
  lastName: string;
} = {
  company: "Naimur Inc.", //--> literal type, exact value , cant change it
  firstName: "Naimur",
  //   middleName: "Rahman",
  lastName: "Rahman",
};

