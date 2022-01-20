import Queue from '../lib/queue'

class UserController {
    async store(req, res){
        const { name, email, pass } = req.body
        const user = { name, email, pass }

        await Queue.add('RegistrationMail', { user });
        return res.json(user)
    }
}

export { UserController }
