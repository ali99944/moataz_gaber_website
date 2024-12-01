import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'أحمد محمود',
      role: 'صاحب منزل',
      content: 'تجربة رائعة مع معتز جابر. تم تنفيذ المطبخ بدقة عالية وجودة ممتازة.',
      avatar: '/avatar-1.jpg',
    },
    {
      name: 'سارة علي',
      role: 'مصممة داخلية',
      content: 'أسلوب عمل احترافي ونتائج مبهرة. أنصح بالتعامل مع معتز لكل من يبحث عن التميز.',
      avatar: '/avatar-2.jpg',
    },
    {
      name: 'محمد خالد',
      role: 'رجل أعمال',
      content: 'تم تنفيذ ديكور مكتبي بشكل يفوق التوقعات. شكراً لفريق معتز جابر على الإبداع.',
      avatar: '/avatar-3.jpg',
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">آراء عملائنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full ml-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

