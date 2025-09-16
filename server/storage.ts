import { Contact, Payment, WebhookLog, User, InsertContact, InsertPayment, InsertWebhookLog, InsertUser } from "@shared/schema";

export interface IStorage {
  // Users
  createUser(user: InsertUser): Promise<User>;
  getUserByEmail(email: string): Promise<User | null>;
  getUserById(id: number): Promise<User | null>;
  updateUser(id: number, updates: Partial<User>): Promise<User>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  getContactById(id: number): Promise<Contact | null>;
  updateContactStatus(id: number, status: string): Promise<Contact>;

  // Payments
  createPayment(payment: InsertPayment): Promise<Payment>;
  getAllPayments(): Promise<Payment[]>;
  getPaymentByStripeId(stripePaymentIntentId: string): Promise<Payment | null>;

  // Webhook Logs
  createWebhookLog(log: InsertWebhookLog): Promise<WebhookLog>;
  getAllWebhookLogs(): Promise<WebhookLog[]>;
  markWebhookProcessed(stripeEventId: string): Promise<void>;
  getWebhookByEventId(stripeEventId: string): Promise<WebhookLog | null>;
}

export class MemStorage implements IStorage {
  private users: User[] = [];
  private contacts: Contact[] = [];
  private payments: Payment[] = [];
  private webhookLogs: WebhookLog[] = [];
  private nextUserId = 1;
  private nextContactId = 1;
  private nextPaymentId = 1;
  private nextWebhookId = 1;

  // Users
  async createUser(user: InsertUser): Promise<User> {
    const newUser: User = {
      id: this.nextUserId++,
      ...user,
      stripeCustomerId: user.stripeCustomerId ?? null,
      stripeSubscriptionId: user.stripeSubscriptionId ?? null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null;
  }

  async getUserById(id: number): Promise<User | null> {
    return this.users.find(u => u.id === id) || null;
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User> {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex === -1) throw new Error("User not found");
    
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updates,
      updatedAt: new Date(),
    };
    return this.users[userIndex];
  }

  // Contacts
  async createContact(contact: InsertContact): Promise<Contact> {
    const newContact: Contact = {
      id: this.nextContactId++,
      ...contact,
      privacyConsent: contact.privacyConsent ?? false,
      status: "nouveau",
      createdAt: new Date(),
    };
    this.contacts.push(newContact);
    return newContact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return [...this.contacts].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getContactById(id: number): Promise<Contact | null> {
    return this.contacts.find(c => c.id === id) || null;
  }

  async updateContactStatus(id: number, status: string): Promise<Contact> {
    const contactIndex = this.contacts.findIndex(c => c.id === id);
    if (contactIndex === -1) throw new Error("Contact not found");
    
    this.contacts[contactIndex] = {
      ...this.contacts[contactIndex],
      status,
    };
    return this.contacts[contactIndex];
  }

  // Payments
  async createPayment(payment: InsertPayment): Promise<Payment> {
    const newPayment: Payment = {
      id: this.nextPaymentId++,
      ...payment,
      userId: payment.userId ?? null,
      currency: payment.currency ?? "eur",
      description: payment.description ?? null,
      createdAt: new Date(),
    };
    this.payments.push(newPayment);
    return newPayment;
  }

  async getAllPayments(): Promise<Payment[]> {
    return [...this.payments].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getPaymentByStripeId(stripePaymentIntentId: string): Promise<Payment | null> {
    return this.payments.find(p => p.stripePaymentIntentId === stripePaymentIntentId) || null;
  }

  // Webhook Logs
  async createWebhookLog(log: InsertWebhookLog): Promise<WebhookLog> {
    const newLog: WebhookLog = {
      id: this.nextWebhookId++,
      ...log,
      processed: false,
      createdAt: new Date(),
    };
    this.webhookLogs.push(newLog);
    return newLog;
  }

  async getAllWebhookLogs(): Promise<WebhookLog[]> {
    return [...this.webhookLogs].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async markWebhookProcessed(stripeEventId: string): Promise<void> {
    const logIndex = this.webhookLogs.findIndex(l => l.stripeEventId === stripeEventId);
    if (logIndex !== -1) {
      this.webhookLogs[logIndex].processed = true;
    }
  }

  async getWebhookByEventId(stripeEventId: string): Promise<WebhookLog | null> {
    return this.webhookLogs.find(l => l.stripeEventId === stripeEventId) || null;
  }
}

export const storage = new MemStorage();