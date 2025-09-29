export function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Kite surfing, sunsets, beaches and fine dining
        </h2>
        <div className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/N9YXUR187n8"
            title="Table View Lifestyle and Leisure"
            className="w-full h-full rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
