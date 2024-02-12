import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
export const youtube_video =
	sqliteTable('youtube_video', {
		videoId: text('videoId').notNull().primaryKey(),
		create_ms:
			integer('create_ms', { mode: 'timestamp_ms' })
				.notNull()
				.default(sql`CURRENT_TIMESTAMP`),
		published_ms:
			integer('published_ms', { mode: 'timestamp_ms' })
				.notNull(),
		updated_ms:
			integer('updated_ms', { mode: 'timestamp_ms' })
				.notNull(),
		channelId: text('channelId').notNull(),
		author_name: text('author_name').notNull(),
		author_uri: text('author_uri').notNull(),
		title: text('title').notNull(),
		thumbnail: text('thumbnail').notNull(),
		description: text('description'),
	})
