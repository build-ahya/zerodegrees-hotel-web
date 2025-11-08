import Icon from '@/components/icon';

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-primary-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <Icon name="eos-icons:loading" size={48} color="text-primary-600 animate-spin" />
                <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
            </div>
        </div>
    );
}
