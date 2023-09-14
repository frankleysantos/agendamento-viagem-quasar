// This is just an example,
// so you can safely delete all default props below
import general from "./general/general"
import vehicles from "./vehicles/vehicle"
import passengers from "./passengers/passenger"
export default {
  ...vehicles,
  ...general,
  ...passengers
}
