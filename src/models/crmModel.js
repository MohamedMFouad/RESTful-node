import monogoose from 'mongoose';

const Schema = monogoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter your a first name'
    },
    lastName: {
        type: String,
        required: 'enter your a list name'  
    }, 
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})