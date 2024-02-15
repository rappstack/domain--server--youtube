import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
export const youtube_video_tbl =
	sqliteTable('youtube_video', {
		videoId: text('videoId').notNull().primaryKey(),
		create_dts:
			integer('create_dts', { mode: 'timestamp_ms' })
				.notNull()
				.default(sql`CURRENT_TIMESTAMP`),
		publishedAt:
			integer('publishedAt', { mode: 'timestamp_ms' })
				.notNull(),
		updatedAt:
			integer('updatedAt', { mode: 'timestamp_ms' })
				.notNull(),
		channelId: text('channelId').notNull(),
		author_name: text('author_name').notNull(),
		author_uri: text('author_uri').notNull(),
		title: text('title').notNull(),
		thumbnail: text('thumbnail').notNull(),
		description: text('description'),
	})
