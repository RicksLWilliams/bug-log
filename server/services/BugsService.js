import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class BugsService {
  async getAll(userEmail) {
    return await dbContext.Bugs.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }

  async getById(id, userEmail) {
    let data = await dbContext.Bugs.findById({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this bug")
    }
    return data
  }

   async getBugNotesByBugId(bugId, userEmail) {
     let data = await dbContext.Notes.find({ bug: bugId })
     if (!data) {
       throw new BadRequest("Invalid ID")
     }
     return data
   }

  async create(rawData) {
    let data = await dbContext.Bugs.create(rawData)
    return data
  }

  async edit(id, userEmail, update) {
    let data = await dbContext.Bugs.findOneAndUpdate({ _id: id, creatorEmail: userEmail, closed: false }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this bug");
    }
    return data;
  }

  async delete(id, userEmail) {
    let data = await dbContext.Bugs.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this bug");
    }
  }

}


export const bugsService = new BugsService()