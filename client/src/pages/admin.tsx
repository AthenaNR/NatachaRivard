import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Users, 
  CreditCard, 
  Mail, 
  Activity,
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  AlertCircle
} from "lucide-react";

type Contact = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
};

type Payment = {
  id: string;
  userId?: string;
  stripePaymentId: string;
  amount: string;
  currency: string;
  status: string;
  type: string;
  createdAt: string;
};

type WebhookLog = {
  id: string;
  stripeEventId: string;
  eventType: string;
  processed: boolean;
  data?: string;
  createdAt: string;
};

export default function Admin() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [webhooks, setWebhooks] = useState<WebhookLog[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contactsRes, paymentsRes, webhooksRes] = await Promise.all([
        apiRequest("GET", "/api/admin/contacts"),
        apiRequest("GET", "/api/admin/payments"),
        apiRequest("GET", "/api/admin/webhooks")
      ]);

      const [contactsData, paymentsData, webhooksData] = await Promise.all([
        contactsRes.json(),
        paymentsRes.json(),
        webhooksRes.json()
      ]);

      setContacts(contactsData);
      setPayments(paymentsData);
      setWebhooks(webhooksData);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les données admin",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateContactStatus = async (contactId: string, status: string) => {
    try {
      await apiRequest("PATCH", `/api/admin/contact/${contactId}`, { status });
      setContacts(contacts.map(contact => 
        contact.id === contactId ? { ...contact, status } : contact
      ));
      toast({
        title: "Statut mis à jour",
        description: "Le statut du contact a été modifié"
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le statut",
        variant: "destructive"
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatAmount = (amount: string, currency: string) => {
    return `${parseFloat(amount).toFixed(2)} ${currency.toUpperCase()}`;
  };

  const getStatusBadge = (status: string, type: 'contact' | 'payment' | 'webhook') => {
    const variants = {
      contact: {
        new: { variant: "destructive" as const, icon: <Clock className="h-3 w-3" /> },
        replied: { variant: "default" as const, icon: <CheckCircle className="h-3 w-3" /> },
        closed: { variant: "secondary" as const, icon: <XCircle className="h-3 w-3" /> }
      },
      payment: {
        succeeded: { variant: "default" as const, icon: <CheckCircle className="h-3 w-3" /> },
        pending: { variant: "secondary" as const, icon: <Clock className="h-3 w-3" /> },
        failed: { variant: "destructive" as const, icon: <XCircle className="h-3 w-3" /> }
      },
      webhook: {
        true: { variant: "default" as const, icon: <CheckCircle className="h-3 w-3" /> },
        false: { variant: "secondary" as const, icon: <Clock className="h-3 w-3" /> }
      }
    };

    const config = variants[type][status as keyof typeof variants[typeof type]];
    if (!config) return <Badge variant="outline">{status}</Badge>;

    return (
      <Badge variant={config.variant} className="gap-1">
        {config.icon}
        {status}
      </Badge>
    );
  };

  const stats = {
    totalContacts: contacts.length,
    newContacts: contacts.filter(c => c.status === 'new').length,
    totalPayments: payments.length,
    successfulPayments: payments.filter(p => p.status === 'succeeded').length,
    totalRevenue: payments
      .filter(p => p.status === 'succeeded')
      .reduce((sum, p) => sum + parseFloat(p.amount), 0),
    webhooksProcessed: webhooks.filter(w => w.processed).length
  };

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <RefreshCw className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Chargement des données...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12" data-testid="page-admin">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-primary" data-testid="admin-title">
              Tableau de Bord Admin
            </h1>
            <p className="text-muted-foreground">
              Gestion des contacts, paiements et webhooks Stripe
            </p>
          </div>
          <Button onClick={fetchData} variant="outline" data-testid="refresh-data">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualiser
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card data-testid="stat-contacts">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contacts Total</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalContacts}</div>
              <p className="text-xs text-muted-foreground">
                {stats.newContacts} nouveau{stats.newContacts !== 1 ? 'x' : ''}
              </p>
            </CardContent>
          </Card>

          <Card data-testid="stat-payments">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Paiements</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPayments}</div>
              <p className="text-xs text-muted-foreground">
                {stats.successfulPayments} réussi{stats.successfulPayments !== 1 ? 's' : ''}
              </p>
            </CardContent>
          </Card>

          <Card data-testid="stat-revenue">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenus</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRevenue.toFixed(2)} $ CAD</div>
              <p className="text-xs text-muted-foreground">
                Paiements validés
              </p>
            </CardContent>
          </Card>

          <Card data-testid="stat-webhooks">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Webhooks</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{webhooks.length}</div>
              <p className="text-xs text-muted-foreground">
                {stats.webhooksProcessed} traité{stats.webhooksProcessed !== 1 ? 's' : ''}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contacts" data-testid="tab-contacts">
              Contacts ({contacts.length})
            </TabsTrigger>
            <TabsTrigger value="payments" data-testid="tab-payments">
              Paiements ({payments.length})
            </TabsTrigger>
            <TabsTrigger value="webhooks" data-testid="tab-webhooks">
              Webhooks ({webhooks.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Messages de Contact</CardTitle>
              </CardHeader>
              <CardContent>
                {contacts.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Aucun message de contact pour le moment
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Sujet</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contacts.map((contact) => (
                        <TableRow key={contact.id} data-testid={`contact-row-${contact.id}`}>
                          <TableCell className="text-sm">
                            {formatDate(contact.createdAt)}
                          </TableCell>
                          <TableCell className="font-medium">{contact.name}</TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell className="max-w-xs truncate">{contact.subject}</TableCell>
                          <TableCell>
                            {getStatusBadge(contact.status, 'contact')}
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              {contact.status === 'new' && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => updateContactStatus(contact.id, 'replied')}
                                  data-testid={`button-reply-${contact.id}`}
                                >
                                  Marquer répondu
                                </Button>
                              )}
                              {contact.status !== 'closed' && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => updateContactStatus(contact.id, 'closed')}
                                  data-testid={`button-close-${contact.id}`}
                                >
                                  Fermer
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Historique des Paiements</CardTitle>
              </CardHeader>
              <CardContent>
                {payments.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Aucun paiement enregistré
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>ID Stripe</TableHead>
                        <TableHead>Montant</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Statut</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {payments.map((payment) => (
                        <TableRow key={payment.id} data-testid={`payment-row-${payment.id}`}>
                          <TableCell className="text-sm">
                            {formatDate(payment.createdAt)}
                          </TableCell>
                          <TableCell className="font-mono text-xs">
                            {payment.stripePaymentId}
                          </TableCell>
                          <TableCell className="font-medium">
                            {formatAmount(payment.amount, payment.currency)}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{payment.type}</Badge>
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(payment.status, 'payment')}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Logs des Webhooks Stripe</CardTitle>
              </CardHeader>
              <CardContent>
                {webhooks.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Aucun webhook reçu
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Event ID</TableHead>
                        <TableHead>Type d'Événement</TableHead>
                        <TableHead>Traité</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {webhooks.map((webhook) => (
                        <TableRow key={webhook.id} data-testid={`webhook-row-${webhook.id}`}>
                          <TableCell className="text-sm">
                            {formatDate(webhook.createdAt)}
                          </TableCell>
                          <TableCell className="font-mono text-xs">
                            {webhook.stripeEventId}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{webhook.eventType}</Badge>
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(webhook.processed.toString(), 'webhook')}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Warning Notice */}
        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
              <div>
                <h3 className="font-medium text-destructive mb-1">
                  Accès Administrateur
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cette page contient des informations sensibles. Assurez-vous d'être en sécurité et de protéger l'accès à cette interface.
                  En production, cette page devrait être protégée par une authentification admin robuste.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
