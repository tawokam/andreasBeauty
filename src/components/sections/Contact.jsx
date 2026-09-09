import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../ui/Button';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert('Votre message a été envoyé ! (simulation)');
  };

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-serif text-center text-gray-800 mb-4">Contactez-nous</h2>
        <p className="text-center text-gray-600 mb-12">
          Pour toute question ou réservation, n'hésitez pas à nous écrire.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Nom</label>
            <input {...register('name', { required: true })} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            {errors.name && <span className="text-red-500 text-sm">Ce champ est requis</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            {errors.email && <span className="text-red-500 text-sm">Email valide requis</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Téléphone</label>
            <input {...register('phone')} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea {...register('message', { required: true })} rows="4" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
            {errors.message && <span className="text-red-500 text-sm">Message requis</span>}
          </div>
          <Button type="submit" variant="primary" className="w-full">Envoyer</Button>
        </form>
        <div className="mt-8 text-center text-gray-600">
          <p>📍 Bafoussam, Cameroun</p>
          <p>📞 +237 6XX XXX XXX</p>
          <p>✉️ contact@andreasbeauty.cm</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;