export default function MultiClasses(...classes: string[]): string {
  return classes.reduce((previous, current) => {
    let output = previous;
    if (previous)
      output += ' ';
    output += current;
    return output;
  });
}
