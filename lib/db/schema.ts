
import { pgTable, text, integer, serial, numeric, time, date } from 'drizzle-orm/pg-core';

// Monasteries Table
export const monasteries = pgTable('monasteries', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    location: text('location').notNull(),
    established: integer('established').notNull(),
    order_name: text('order_name').notNull(),
    founder: text('founder').notNull(),
    description: text('description').notNull(),
    significance: text('significance').notNull(),
    virtual_tour_url: text('virtual_tour_url'),
    lat: numeric('lat').notNull(),
    lng: numeric('lng').notNull(),
});

// Monastery Features Table
export const monasteryFeatures = pgTable('monastery_features', {
    monastery_id: text('monastery_id')
        .notNull()
        .references(() => monasteries.id, { onDelete: 'cascade' }),
    feature: text('feature').notNull(),
});

// Historical Events Table
export const historicalEvents = pgTable('historical_events', {
    id: serial('id').primaryKey(),
    year: integer('year').notNull(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    monastery_id: text('monastery_id').references(() => monasteries.id),
});

// Events Table
export const events = pgTable('events', {
    id: text('id').primaryKey(),
    title: text('title').notNull(),
    date: date('date').notNull(),
    time: time('time').notNull(),
    location: text('location').notNull(),
    description: text('description').notNull(),
    type: text('type').notNull(), // We'll handle enum values manually
});

// Contact Info Table
export const contactInfo = pgTable('contact_info', {
    id: serial('id').primaryKey(),
    general_visiting_hours: text('general_visiting_hours'),
    prayer_times: text('prayer_times'),
    phone: text('phone'),
    email: text('email'),
    address: text('address'),
});

// Contact Guidelines Table
export const contactGuidelines = pgTable('contact_guidelines', {
    id: serial('id').primaryKey(),
    contact_info_id: integer('contact_info_id')
        .notNull()
        .references(() => contactInfo.id, { onDelete: 'cascade' }),
    guideline: text('guideline').notNull(),
});

export type EventType = 'festival' | 'ceremony' | 'teaching' | 'pilgrimage';
