/**
 *  filter types array - to add a new filter just need to add it in this array,
 * design could break tho if there're too many filters or if a filtername's too long  */
let skillFilters: Array<string> = ["All", "Frontend", "Backend", "Design"];

/**
 * Recieves a filter in format [All|Frontend|Backend|Design] and turns it into [undefined|front|back|design] or viceversa
 * Usefull to match model names and filter names
 * @param filter
 * @returns string
 */
export let translateFilter = (
  filter: string | undefined
): string | undefined => {
  if (filter === undefined) return "All";
  if (filter === "front") return "Frontend";
  if (filter === "back") return "Backend";
  if (filter === "design") return "Design";

  if (filter === "All") return undefined;
  if (filter === "Frontend") return "front";
  if (filter === "Backend") return "back";
  return "design";
};

export default skillFilters;
