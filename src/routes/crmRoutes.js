import { addNewContact, getContacts, getContactWithId, updateContactWithId,deleteContact} from "../controllers/crmController";
 
const routes = (app) => {
    app.route('/contact')
    .get((req, res, next)=>{
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next(); 
    }, getContacts)
    //create addNewContact
    .post(addNewContact);
    //update request    
   
    app.route('/contact/:contactId')
    .get(getContactWithId)
    //update contact
    .put(updateContactWithId)
    //delete request 
    .delete(deleteContact);
}
export default routes;