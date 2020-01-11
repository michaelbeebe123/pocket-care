const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: INPUT ALL OF THE FIELDS THAT WILL PUSHED TO THE DB
// FIXME: NUMBER OR INTEGER?
const accountSchema = new Schema({
    id: {type: id},
    password: {type: String},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    date_of_birth: {type: Date, required: true},
    gender: {type: String},
    medicare: {type: Number},
    military_id: {type: Number},
    weight: {type: Number, required: true},
    height: {type: Number},
    blood_type: {type: String, required: true},
    allergies: {
        medication_allergies: {type: String},
        food_allergies: {type: String}
    },
    needs: {
        glasses: {type: Boolean},
        dentures: {type: Boolean},
        cane_or_walker: {type: Boolean},
        hearind_aid: {type: Boolean},
        wheelchair: {type: Boolean}
    },
    disabilities: {type: String},
    surgeries: {
        name: {type: String},
        doctor: {type: String},
        date: {type: Date},
        comments: {type: String}
    },
    doctors: {
        primary_physician: {
            name: {type: String},
            address: {type: String},
            phone: {type: Number}
        },
        specialists: {
            physical_therapist: {
                name: {type: String},
                address: {type: String},
                phone: {type: Number}
            },
            dentist: {
                name: {type: String},
                address: {type: String},
                phone: {type: Number}
            },
            other: {
                specialism: {type: String},
                name: {type: String},
                address: {type: String},
                phone: {type: Number}
            }
        } 
    },
    pharmacy: {
        address: {type: String},
        phone: {type: Number}
    },
    insurance: {
        provider: {type: String},
        account_number: {type: Number}
    },
    medication: {
        name: {type: String},
        purpose: {type: String},
        dose: {type: String},
        instruction: {type: String}
    },
    immunization: {
        name: {type: String},
        date: {type: Date},
        renewal_date: {type: Date}
    }
})

const Account = mongoose.model("Account", accountSchema);
module.exports = Account