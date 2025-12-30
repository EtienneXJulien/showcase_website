"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { sendContactEmail } from "@/app/actions/sendEmail"
import { useState } from "react"

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        try {
            const result = await sendContactEmail(formData);
            if (result.success) {
                alert("Merci pour votre message ! Nous vous contacterons bientôt.");
            } else {
                alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
            }
        } catch (error) {
            alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        } finally {
            setIsSubmitting(false);
        }
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contactez-nous
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Vous avez une question ou souhaitez collaborer ? Nous serions ravis de vous entendre.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un Message</h2>
                        <form className="space-y-6" action={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Nom
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Votre nom"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Sujet
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="De quoi s'agit-il ?"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Dites-nous en plus..."
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-semibold mb-6">Informations de Contact</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-300">team.itsquare@outlook.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Téléphone</h3>
                                        <p className="text-gray-600 dark:text-gray-300 select-none">+33 6 45 98 66 18</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Bureau</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            80 rue saint Georges<br />
                                            54000, Nancy
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-semibold mb-6">Horaires d'Ouverture</h2>
                            <div className="space-y-2 text-gray-600 dark:text-gray-300">
                                <div className="flex justify-between">
                                    <span>Lundi - Vendredi</span>
                                    <span className="font-medium">9:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Samedi</span>
                                    <span className="font-medium">10:00 - 16:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Dimanche</span>
                                    <span className="font-medium">Fermé</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}