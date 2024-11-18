import { Console } from "console";

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    "14-10611"
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "14-10611" );
  }

  if (query.toLowerCase().includes("what is your name")) {
    "Yerimar"
    return ( "Yerimar" );
  }

  if (query.toLowerCase().includes("plus")) {
    const match = query.match(/(\d+)/g);
  
    if (match && match.length >= 2) {
      const num1 = parseInt(match[0]);
      const num2 = parseInt(match[1]);
      return (num1 + num2).toString();
    }else{
      return "-1";
    }
  }

  return "";
}

