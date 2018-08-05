// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_EDIT_POST = 'TOGGLE_EDIT_POST';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}
//Jest to prosty kreator akcji, który nie ma żadnych parametrów.
//Będzie dwustanowym przełącznikiem, dzięki któremu będziemy mogli przechodzić
//z trybu edycji do trybu podglądu i odwrotnie.
export function toggleEditPost() {
  return {
    type: TOGGLE_EDIT_POST,
  };
}
