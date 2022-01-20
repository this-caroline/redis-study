import Mail from '../lib/Mail'

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
      const { user } = data;
      await Mail.sendMail({
        from: 'Queue Test',
        to: user.email,
        subject: 'Greatings',
        html: `<h1>Hi</h1>`
      });
    },
  };