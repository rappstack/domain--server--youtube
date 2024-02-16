import { sql } from 'drizzle-orm'
import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
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
		channelId: text('channelId').notNull(),
		channelTitle: text('channelTitle').notNull(),
		title: text('title').notNull(),
		description: text('description'),
		etag: text('etag'),
		playlistItemListResponse_etag: text('playlistItemListResponse_etag'),
	}, table=>{
		return {
			playlistItemListResponse_etag_idx: index('playlistItemListResponse_etag_idx').on(table.playlistItemListResponse_etag)
		}
	})
