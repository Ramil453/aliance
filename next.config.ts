import type { NextConfig } from "next";

module.exports = {
	output: 'export', // ВАЖНО: включаем статический экспорт
	images: {
		unoptimized: true, // чтобы картинки работали
	},
	// Если проект не в корне репозитория:
	basePath: process.env.NODE_ENV === 'production' ? '/имя-репозитория' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/имя-репозитория/' : '',
}
