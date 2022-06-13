
export default function validation (req, res, next){
    try {
    if (!(req.body.username.length < 30 && req.body.username.length)) {
        throw new Error('Invalid username')
    }

    if (!/^998[389][012345789][0-9]{7}$/.test(req.body.contact)) {
        throw new Error('Invalid Contact')
      }

    return next()
    } catch (error) {
        return next(error.message)
    }
}