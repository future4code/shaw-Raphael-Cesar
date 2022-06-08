type User = {
    name: string;
    email: string;
    role: string;
  };
  
  const array: User[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" },
  ];
  
  function admintrador(array: User[]): string[] {
    return array
      .filter((email) => {
        return email.role === "admin";
      })
      .map((email) => {
        return email.email;
      });
  }
  console.table(admintrador(array));