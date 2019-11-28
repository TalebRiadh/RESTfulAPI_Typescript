import {Request, Response} from "express";

import {ContactController} from "../controllers/crmController";



export class Routes {
    public contactController: ContactController = new ContactController()

    public routes(app): void {

        // Create a new Contact
        app.route('/contact')
            .post(this.contactController.addNewContact)

        // Get all contacts
        app.route('/contact')
            .get(this.contactController.getContacts)

        // Get a single contact with ID
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)

        // update a specific contact
        app.route('/contact/:contactId')
            .put(this.contactController.updateContact)

        // delete a specific contact
        app.route('/contact/:contactId')
            .delete(this.contactController.deleteContact)
/*
        app.route('/contact/contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact)
*/
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
    }
}