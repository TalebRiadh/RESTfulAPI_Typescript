import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ContactSchema = new Schema({
    firstName:{
        type: String,
        required: "Enter a first name"
    },
    lastName:{
        type: String,
        required: "Enter a last name"
    },
    email:{
        type:String,
        unique: true,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone:{
        type:Number,
        unique: true
    },
    company:{
        type: String,
    },
    created_date:{
        type:Date,
        default: Date.now
    }
})
