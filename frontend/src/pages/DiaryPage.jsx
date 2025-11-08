import Calendar from '../components/Calendar'
import './DiaryPage.css'

export default function DiaryPage() {
  return (
    <div className='w-full h-full flex items-center'>
      <div className="w-full h-fit flex items-start gap-6 text-white">
        {/* Left column: calendar */}
        <Calendar />
        {/* Right column: diary entries */}
          <div className="flex-1 diary-card border rounded-lg p-6" style={{ background: 'rgba(9,16,28,0.7)', borderColor: 'rgba(255,255,255,0.12)' }}>
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm text-gray-300">March 24, Sunday</div>
            </div>
            <div className="text-gray-200 text-left mb-6">
              <p>
                Lorem ipsum dolor sit amet consectetur. Mattis rhoncus turpis rutrum bibendum sapien in vestibulum
                fermentum. Neque ac morbi elementum quis sit etiam sed erat. Nibh in adipiscing porta porttitor gravida
                molestie ac. Fermentum amet integer nunc lacus egestas vitae vel tristique.Lorem ipsum dolor sit amet
                consectetur. Mattis rhoncus turpis rutrum bibendum sapien in vestibulum fermentum. Neque ac morbi
                elementum quis sit etiam sed erat. Nibh in adipiscing porta porttitor gravida molestie ac. Fermentum amet
                integer nunc lacus egestas vitae vel tristique.Lorem ipsum dolor sit amet consectetur. Mattis rhoncus
                turpis rutrum bibendum sapien in vestibulum fermentum. Neque ac morbi elementum quis sit etiam sed erat.
              </p>
            </div>
            <div className="mt-6 flex items-start gap-3">
              <div>
                <div className="text-left text-sm text-gray-300">Fuze</div>
                <p className="text-sm text-left text-gray-300">
                  Lorem ipsum dolor sit amet consectetur. Mattis rhoncus turpis rutrum bibendum sapien in vestibulum
                  fermentum. Cc morbi elementum quis sit etiam sed erat. Nibh in adipiscing porta porttitor gravida
                  molestie ac. Fermentum amet integer nunc lacus egestas vitae vel tristique.Lorem ipsum dolor sit amet
                  consectetur.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
