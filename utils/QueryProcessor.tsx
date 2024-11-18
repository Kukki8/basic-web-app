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
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "Yerimar" );
  }
  return "";
}

export function QueryProcessorAdd(query: string, x: number, y: number): number {
  
    if (query.toLowerCase().includes("what is plus")) {
    return x + y;
    }else{
      -1
  }
}
