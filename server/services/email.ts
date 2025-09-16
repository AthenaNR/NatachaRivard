import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - email functionality will be disabled");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email would be sent:', params);
    return true; // Return true for development without API key
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function generateContactEmailHtml(name: string, email: string, subject: string, message: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🌙 RêveRévélateur</h1>
        <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">Nouveau message de contact</p>
      </div>
      
      <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
        <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1E40AF; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">
            Détails du Contact
          </h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #374151; display: inline-block; width: 80px;">Nom:</strong>
            <span style="color: #6b7280;">${name}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #374151; display: inline-block; width: 80px;">Email:</strong>
            <span style="color: #6b7280;">${email}</span>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151; display: inline-block; width: 80px;">Sujet:</strong>
            <span style="color: #6b7280;">${subject}</span>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151; display: block; margin-bottom: 8px;">Message:</strong>
            <div style="background: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #1E40AF; line-height: 1.6; color: #374151;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 15px; margin-top: 20px;">
            <p style="color: #9ca3af; font-size: 14px; margin: 0;">
              📧 Répondre directement à ${email}<br>
              ⏰ Reçu le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Message automatique de RêveRévélateur | Ne pas répondre à cet email
          </p>
        </div>
      </div>
    </div>
  `;
}
