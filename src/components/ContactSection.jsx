import { Mail, Phone, Map, Linkedin, Instagram, Facebook, Twitch, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: t("title_contact_not"),
        description: t("desc_contact_not"),
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("title1_contact")} <span className="text-primary">{t("title2_contact")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("descripction_contact")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna izquierda - Información de contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t("h3_contact")}</h3>

            <div className="space-y-6 mx-auto max-w-md">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-center md:text-left">Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors block text-center md:text-left"
                    href="mailto:mbelda2006@gmail.com"
                  >
                    mbelda2006@gmail.com
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-center md:text-left">{t("h4_phone")}</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors block text-center md:text-left"
                    href="tel:601241710"
                  >
                    601 24 17 10
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-center md:text-left">{t("h4_location")}</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors block text-center md:text-left"
                    target="_blank"
                    href="https://g.co/kgs/SPcN9ib"
                  >
                    {t("a_location")}
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">{t("h4_rrss")}</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  href="https://www.linkedin.com/in/miriam-belda-rodr%C3%ADguez-de-paterna-bb6220354/"
                >
                  <Linkedin />
                </a>
                <a
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  href="https://www.instagram.com/"
                >
                  <Instagram />
                </a>
                <a
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  href="https://www.facebook.com/?locale=es_ES"
                >
                  <Facebook />
                </a>
                <a
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  href="https://www.twitch.tv/"
                >
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6 text-center">{t("btn_getInTouch")}</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t("form_name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Miriam..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t("form_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"/>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? `${t("sending_message")}...` : t("send_message")}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};