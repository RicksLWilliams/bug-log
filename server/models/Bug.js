import mongoose from "mongoose"
import { dbContext } from "../db/DbContext"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Bug = new Schema({
  closed: { type: Boolean, required: true, default: false },
  description: { type: String, required: true },
  title: { type: String, required: true },
  closedDate: { type: Date},
  creatorEmail: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

Bug.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
  })

//CASCADE ON DELETE
 //Board.pre('findOneAndRemove', function (next) {
 //  //lets find all the lists and remove them
 //  Promise.all([
 //    // @ts-ignore
 //    dbContext.Lists.deleteMany({ boardId: this._conditions._id })
 //  ])
 //    .then(() => next())
 //    .catch(err => next(err))
 //})

export default Bug