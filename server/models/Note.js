import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Note = new Schema({
  content: { type: String, required: true },
  bug: { type: ObjectId, ref: 'Bug', required: true },
  flagged: { type: String, enum: ["pending", "completed", "rejected"] },
  creatorEmail: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } })


Note.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
  })

//CASCADE ON DELETE
// List.pre('deleteMany', function (next) {
//   //lets find all the lists and remove them
//   Promise.all([
//     //something like...
//     //dbContext.Task.deleteMany({ listId: this._conditions_id }),
//   ])
//     .then(() => next())
//     .catch(err => next(err))
// })

//CASCADE ON DELETE
// List.pre('findOneAndRemove', function (next) {
//   //lets find all the lists and remove them
//   Promise.all([
//     // dbContext.Task.deleteMany({ boardId: this._conditions._id })
//   ])
//     .then(() => next())
//     .catch(err => next(err))
// })

export default Note