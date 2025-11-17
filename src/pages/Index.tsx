import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Room {
  id: number;
  number: string;
  floor: number;
  type: string;
  status: string;
  image: string;
  price: number;
}

interface Client {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  document: string;
}

interface Booking {
  id: string;
  clientId: number;
  roomId: number;
  checkIn: string;
  checkOut: string;
  cost: number;
  status: string;
}

interface Preference {
  id: number;
  clientId: number;
  name: string;
  comments: string;
  category: string;
}

const Index = () => {
  const [rooms] = useState<Room[]>([
    {
      id: 1,
      number: '101',
      floor: 1,
      type: 'Стандарт',
      status: 'занят',
      image: 'https://cdn.poehali.dev/projects/8819d942-bd24-4f32-848a-fa0c783a54a9/files/131315df-58e3-446c-bd8f-1006ab0eb108.jpg',
      price: 5000
    },
    {
      id: 2,
      number: '102',
      floor: 1,
      type: 'Стандарт',
      status: 'свободен',
      image: 'https://cdn.poehali.dev/projects/8819d942-bd24-4f32-848a-fa0c783a54a9/files/131315df-58e3-446c-bd8f-1006ab0eb108.jpg',
      price: 5000
    },
    {
      id: 3,
      number: '103',
      floor: 1,
      type: 'Комфорт',
      status: 'свободен',
      image: 'https://cdn.poehali.dev/projects/8819d942-bd24-4f32-848a-fa0c783a54a9/files/ed8589dd-83f9-47a7-8e7b-96ac0aa10856.jpg',
      price: 8000
    },
    {
      id: 4,
      number: '201',
      floor: 2,
      type: 'Комфорт',
      status: 'свободен',
      image: 'https://cdn.poehali.dev/projects/8819d942-bd24-4f32-848a-fa0c783a54a9/files/ed8589dd-83f9-47a7-8e7b-96ac0aa10856.jpg',
      price: 8000
    },
    {
      id: 5,
      number: '202',
      floor: 2,
      type: 'Люкс',
      status: 'занят',
      image: 'https://cdn.poehali.dev/projects/8819d942-bd24-4f32-848a-fa0c783a54a9/files/c9e4648a-9949-40e1-997d-4cfa2e2630c4.jpg',
      price: 12000
    },
    {
      id: 6,
      number: '203',
      floor: 2,
      type: 'Люкс',
      status: 'свободен',
      image: 'https://cdn.poehali.dev/projects/8819d942-bd24-4f32-848a-fa0c783a54a9/files/c9e4648a-9949-40e1-997d-4cfa2e2630c4.jpg',
      price: 12000
    },
    {
      id: 7,
      number: '301',
      floor: 3,
      type: 'Премиум',
      status: 'свободен',
      image: 'https://cdn.poehali.dev/projects/8819d942-bd24-4f32-848a-fa0c783a54a9/files/c9e4648a-9949-40e1-997d-4cfa2e2630c4.jpg',
      price: 15000
    },
    {
      id: 8,
      number: '302',
      floor: 3,
      type: 'Премиум',
      status: 'свободен',
      image: 'https://cdn.poehali.dev/projects/8819d942-bd24-4f32-848a-fa0c783a54a9/files/c9e4648a-9949-40e1-997d-4cfa2e2630c4.jpg',
      price: 15000
    }
  ]);

  const [clients] = useState<Client[]>([
    { id: 1, firstName: 'Иван', lastName: 'Иванов', birthDate: '1990-05-15', document: 'паспорт 4510 123456' },
    { id: 2, firstName: 'Мария', lastName: 'Петрова', birthDate: '1985-12-20', document: 'паспорт 4511 654321' },
    { id: 3, firstName: 'Алексей', lastName: 'Сидоров', birthDate: '1978-08-10', document: 'паспорт 4512 789012' },
    { id: 4, firstName: 'Елена', lastName: 'Смирнова', birthDate: '1992-03-25', document: 'паспорт 4513 456789' },
    { id: 5, firstName: 'Дмитрий', lastName: 'Козлов', birthDate: '1988-11-08', document: 'паспорт 4514 987654' }
  ]);

  const [bookings] = useState<Booking[]>([
    {
      id: 'BK20251107183628',
      clientId: 5,
      roomId: 1,
      checkIn: '2025-11-07',
      checkOut: '2025-11-08',
      cost: 1000,
      status: 'активно'
    },
    {
      id: 'BK20251107183708',
      clientId: 2,
      roomId: 5,
      checkIn: '2025-11-07',
      checkOut: '2025-11-08',
      cost: 1000,
      status: 'активно'
    }
  ]);

  const [preferences] = useState<Preference[]>([
    { id: 1, clientId: 1, name: 'Предпочтения по питанию', comments: 'Вегетарианское меню', category: 'питание' },
    { id: 2, clientId: 1, name: 'Особые пожелания', comments: 'Номер на верхнем этаже', category: 'пожелания' },
    { id: 3, clientId: 2, name: 'Аллергии', comments: 'Не переносит цветочные ароматы', category: 'здоровье' },
    { id: 4, clientId: 3, name: 'Трансфер', comments: 'Нужен трансфер из аэропорта', category: 'трансфер' },
    { id: 5, clientId: 4, name: 'Особые требования', comments: 'Номер для некурящих', category: 'пожелания' },
    { id: 6, clientId: 1, name: 'Аллергия', comments: 'Не цветы', category: 'здоровье' }
  ]);

  const getStatusColor = (status: string) => {
    return status === 'занят' ? 'destructive' : 'default';
  };

  const getBookingStatusColor = (status: string) => {
    return status === 'активно' ? 'default' : 'secondary';
  };

  const getClientName = (clientId: number) => {
    const client = clients.find(c => c.id === clientId);
    return client ? `${client.firstName} ${client.lastName}` : '-';
  };

  const getRoomNumber = (roomId: number) => {
    const room = rooms.find(r => r.id === roomId);
    return room ? room.number : '-';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="bg-primary shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Icon name="Building2" size={32} className="text-accent" />
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
              ОТЕЛЬ ПРЕМИУМ - СИСТЕМА БРОНИРОВАНИЯ
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto gap-2 bg-white/80 backdrop-blur p-2 shadow-md">
            <TabsTrigger value="bookings" className="font-heading data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Calendar" size={18} className="mr-2" />
              Бронирование
            </TabsTrigger>
            <TabsTrigger value="clients" className="font-heading data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Users" size={18} className="mr-2" />
              Клиенты
            </TabsTrigger>
            <TabsTrigger value="rooms" className="font-heading data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="DoorOpen" size={18} className="mr-2" />
              Номера
            </TabsTrigger>
            <TabsTrigger value="preferences" className="font-heading data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Star" size={18} className="mr-2" />
              Предпочтения
            </TabsTrigger>
            <TabsTrigger value="all-bookings" className="font-heading data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="ClipboardList" size={18} className="mr-2" />
              Все бронирования
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-secondary">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="CalendarPlus" size={24} className="text-secondary" />
                    Новое бронирование
                  </CardTitle>
                  <CardDescription>Создайте бронирование номера</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="client" className="font-semibold">Клиент</Label>
                    <Select>
                      <SelectTrigger id="client">
                        <SelectValue placeholder="Выберите клиента" />
                      </SelectTrigger>
                      <SelectContent>
                        {clients.map(client => (
                          <SelectItem key={client.id} value={client.id.toString()}>
                            {client.firstName} {client.lastName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="check-in" className="font-semibold">Дата заезда</Label>
                    <Input id="check-in" type="date" defaultValue="2025-11-17" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="check-out" className="font-semibold">Дата выезда</Label>
                    <Input id="check-out" type="date" defaultValue="2025-11-18" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="room-type" className="font-semibold">Тип номера</Label>
                    <Select>
                      <SelectTrigger id="room-type">
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Стандарт</SelectItem>
                        <SelectItem value="comfort">Комфорт</SelectItem>
                        <SelectItem value="lux">Люкс</SelectItem>
                        <SelectItem value="premium">Премиум</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="pt-2 space-y-2">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 font-semibold">
                      <Icon name="UserPlus" size={18} className="mr-2" />
                      Добавить клиента
                    </Button>
                    <Button className="w-full bg-destructive hover:bg-destructive/90 font-semibold">
                      <Icon name="Search" size={18} className="mr-2" />
                      Найти номера
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 shadow-lg border-t-4 border-t-accent">
                <CardHeader className="bg-gradient-to-br from-accent/10 to-accent/5">
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="BedDouble" size={24} className="text-accent" />
                    Доступные номера
                  </CardTitle>
                  <CardDescription>Номера, свободные в выбранный период</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-heading font-semibold">ID</TableHead>
                          <TableHead className="font-heading font-semibold">Номер</TableHead>
                          <TableHead className="font-heading font-semibold">Этаж</TableHead>
                          <TableHead className="font-heading font-semibold">Тип</TableHead>
                          <TableHead className="font-heading font-semibold">Статус</TableHead>
                          <TableHead className="text-right font-heading font-semibold">Действие</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rooms.slice(0, 5).map((room) => (
                          <TableRow key={room.id} className="hover:bg-secondary/5 transition-colors">
                            <TableCell className="font-medium">{room.id}</TableCell>
                            <TableCell className="font-semibold">{room.number}</TableCell>
                            <TableCell>{room.floor}</TableCell>
                            <TableCell>{room.type}</TableCell>
                            <TableCell>
                              <Badge variant={getStatusColor(room.status)}>{room.status}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                                <Icon name="CheckCircle" size={16} className="mr-1" />
                                Забронировать
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="clients" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-secondary">
                <CardHeader className="bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="UserPlus" size={24} className="text-secondary" />
                    Управление клиентами
                  </CardTitle>
                  <CardDescription>Добавление и редактирование</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="client-id" className="font-semibold">ID клиента</Label>
                    <Input id="client-id" placeholder="Автоматически" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="font-semibold">Имя</Label>
                    <Input id="first-name" placeholder="Введите имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="font-semibold">Фамилия</Label>
                    <Input id="last-name" placeholder="Введите фамилию" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birth-date" className="font-semibold">Дата рождения</Label>
                    <Input id="birth-date" type="date" defaultValue="2000-01-01" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="document" className="font-semibold">Документ</Label>
                    <Input id="document" placeholder="паспорт XXXX XXXXXX" />
                  </div>
                  <div className="pt-2 space-y-2">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 font-semibold">
                      <Icon name="Plus" size={18} className="mr-2" />
                      Добавить
                    </Button>
                    <Button variant="outline" className="w-full font-semibold">
                      <Icon name="Save" size={18} className="mr-2" />
                      Сохранить
                    </Button>
                    <Button variant="destructive" className="w-full font-semibold">
                      <Icon name="Trash2" size={18} className="mr-2" />
                      Удалить
                    </Button>
                    <Button variant="secondary" className="w-full font-semibold">
                      <Icon name="RotateCcw" size={18} className="mr-2" />
                      Очистить форму
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 shadow-lg border-t-4 border-t-primary">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5">
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-primary" />
                    Список клиентов
                  </CardTitle>
                  <CardDescription>Все зарегистрированные клиенты</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-heading font-semibold">ID</TableHead>
                          <TableHead className="font-heading font-semibold">Имя</TableHead>
                          <TableHead className="font-heading font-semibold">Фамилия</TableHead>
                          <TableHead className="font-heading font-semibold">Дата рождения</TableHead>
                          <TableHead className="font-heading font-semibold">Документ</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {clients.map((client) => (
                          <TableRow key={client.id} className="hover:bg-primary/5 transition-colors cursor-pointer">
                            <TableCell className="font-medium">{client.id}</TableCell>
                            <TableCell className="font-semibold">{client.firstName}</TableCell>
                            <TableCell>{client.lastName}</TableCell>
                            <TableCell>{client.birthDate}</TableCell>
                            <TableCell className="text-muted-foreground">{client.document}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-6 animate-fade-in">
            <Card className="shadow-lg border-t-4 border-t-accent">
              <CardHeader className="bg-gradient-to-br from-accent/10 to-accent/5">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-heading flex items-center gap-2">
                      <Icon name="Building" size={28} className="text-accent" />
                      Все номера отеля
                    </CardTitle>
                    <CardDescription className="mt-1">Управление номерным фондом</CardDescription>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Icon name="RefreshCw" size={18} className="mr-2" />
                    Обновить
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {rooms.map((room) => (
                    <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={room.image}
                          alt={`Номер ${room.number}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                        <Badge
                          className="absolute top-3 right-3 text-sm font-semibold"
                          variant={getStatusColor(room.status)}
                        >
                          {room.status}
                        </Badge>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="font-heading text-xl flex items-center justify-between">
                          <span>Номер {room.number}</span>
                          <Icon name="DoorOpen" size={20} className="text-primary" />
                        </CardTitle>
                        <CardDescription className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Layers" size={16} className="text-muted-foreground" />
                            <span>Этаж: {room.floor}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Tag" size={16} className="text-muted-foreground" />
                            <span className="font-semibold">{room.type}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-heading font-bold text-primary">
                            {room.price.toLocaleString()} ₽
                          </span>
                          <span className="text-sm text-muted-foreground">/ ночь</span>
                        </div>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" size="sm">
                          <Icon name="Edit" size={16} className="mr-2" />
                          Изменить
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-accent">
                <CardHeader className="bg-gradient-to-br from-accent/10 to-accent/5">
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="Plus" size={24} className="text-accent" />
                    Добавить предпочтение
                  </CardTitle>
                  <CardDescription>Персонализация обслуживания</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="pref-client" className="font-semibold">Клиент</Label>
                    <Select>
                      <SelectTrigger id="pref-client">
                        <SelectValue placeholder="Выберите клиента" />
                      </SelectTrigger>
                      <SelectContent>
                        {clients.map(client => (
                          <SelectItem key={client.id} value={client.id.toString()}>
                            {client.firstName} {client.lastName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pref-name" className="font-semibold">Название предпочтения</Label>
                    <Input id="pref-name" placeholder="Например: Питание" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pref-comments" className="font-semibold">Комментарий</Label>
                    <Textarea id="pref-comments" placeholder="Подробное описание..." rows={4} />
                  </div>
                  <div className="pt-2">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      <Icon name="Plus" size={18} className="mr-2" />
                      Добавить
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 shadow-lg border-t-4 border-t-secondary">
                <CardHeader className="bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="Star" size={24} className="text-secondary" />
                    Предпочтения клиентов
                  </CardTitle>
                  <CardDescription>Все записи о предпочтениях</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-heading font-semibold">ID</TableHead>
                          <TableHead className="font-heading font-semibold">Клиент</TableHead>
                          <TableHead className="font-heading font-semibold">Предпочтение</TableHead>
                          <TableHead className="font-heading font-semibold">Комментарий</TableHead>
                          <TableHead className="font-heading font-semibold">Категория</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {preferences.map((pref) => (
                          <TableRow key={pref.id} className="hover:bg-secondary/5 transition-colors">
                            <TableCell className="font-medium">{pref.id}</TableCell>
                            <TableCell className="font-semibold">{getClientName(pref.clientId)}</TableCell>
                            <TableCell>{pref.name}</TableCell>
                            <TableCell className="text-muted-foreground">{pref.comments}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{pref.category}</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="all-bookings" className="space-y-6 animate-fade-in">
            <Card className="shadow-lg border-t-4 border-t-primary">
              <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-heading flex items-center gap-2">
                      <Icon name="ClipboardList" size={28} className="text-primary" />
                      Все бронирования
                    </CardTitle>
                    <CardDescription className="mt-1">История и активные бронирования</CardDescription>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Icon name="FileText" size={18} className="mr-2" />
                    Экспорт
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-heading font-semibold">ID</TableHead>
                        <TableHead className="font-heading font-semibold">Номер брони</TableHead>
                        <TableHead className="font-heading font-semibold">Клиент</TableHead>
                        <TableHead className="font-heading font-semibold">Номер</TableHead>
                        <TableHead className="font-heading font-semibold">Заезд</TableHead>
                        <TableHead className="font-heading font-semibold">Выезд</TableHead>
                        <TableHead className="font-heading font-semibold">Стоимость</TableHead>
                        <TableHead className="font-heading font-semibold">Статус</TableHead>
                        <TableHead className="text-right font-heading font-semibold">Действие</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.map((booking, index) => (
                        <TableRow key={booking.id} className="hover:bg-primary/5 transition-colors">
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell className="font-mono text-sm">{booking.id}</TableCell>
                          <TableCell className="font-semibold">{getClientName(booking.clientId)}</TableCell>
                          <TableCell>{getRoomNumber(booking.roomId)}</TableCell>
                          <TableCell>{booking.checkIn}</TableCell>
                          <TableCell>{booking.checkOut}</TableCell>
                          <TableCell className="font-semibold text-accent">{booking.cost.toLocaleString()} ₽</TableCell>
                          <TableCell>
                            <Badge variant={getBookingStatusColor(booking.status)}>{booking.status}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline" className="font-semibold">
                                  <Icon name="Eye" size={16} className="mr-1" />
                                  Детали
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle className="font-heading text-2xl">Детали бронирования</DialogTitle>
                                  <DialogDescription>Полная информация о бронировании {booking.id}</DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label className="text-muted-foreground">Клиент</Label>
                                      <p className="font-semibold text-lg">{getClientName(booking.clientId)}</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Номер</Label>
                                      <p className="font-semibold text-lg">{getRoomNumber(booking.roomId)}</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Дата заезда</Label>
                                      <p className="font-semibold">{booking.checkIn}</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Дата выезда</Label>
                                      <p className="font-semibold">{booking.checkOut}</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Стоимость</Label>
                                      <p className="font-semibold text-xl text-accent">{booking.cost.toLocaleString()} ₽</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Статус</Label>
                                      <Badge variant={getBookingStatusColor(booking.status)} className="mt-2">{booking.status}</Badge>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
