// ALIAS
// It's used for "type aliases". For example:
// | is a pipe opertaor which represents OR

type Age = number | string;    // pipe means number OR string
type color = "blue" | "red" | "yellow" | "purple";
type random = 1 | 2 | 'random' | boolean;

type StringOrNumber = string | number;
//type DictionaryOfStringAndPerson = Dictionary<string, Person>;