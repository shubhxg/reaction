export default function Skeleton () {
  return (
    <div>
      <div className="cuisines-skeleton w-full h-48 bg-slate-200 rounded-md">
        <p className="text-slate-200">hello world</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="skeleton-card-container my-8 mx-8">
          <div className="skeleton-card bg-slate-200 w-80 h-40 rounded-md"></div>
          <div className="skeleton-text bg-slate-200 w-60 h-6 my-2 rounded"></div>
          <div className="skeleton-text bg-slate-200 w-44 h-6 my-2 rounded"></div>
        </div>
        <div className="skeleton-card-container my-8 mx-8">
          <div className="skeleton-card bg-slate-200 w-80 h-40 rounded-md"></div>
          <div className="skeleton-text bg-slate-200 w-60 h-6 my-2 rounded"></div>
          <div className="skeleton-text bg-slate-200 w-44 h-6 my-2 rounded"></div>
        </div>
        <div className="skeleton-card-container my-8 mx-8">
          <div className="skeleton-card bg-slate-200 w-80 h-40 rounded-md"></div>
          <div className="skeleton-text bg-slate-200 w-60 h-6 my-2 rounded"></div>
          <div className="skeleton-text bg-slate-200 w-44 h-6 my-2 rounded"></div>
        </div>
        <div className="skeleton-card-container my-8 mx-8">
          <div className="skeleton-card bg-slate-200 w-80 h-40 rounded-md"></div>
          <div className="skeleton-text bg-slate-200 w-60 h-6 my-2 rounded"></div>
          <div className="skeleton-text bg-slate-200 w-44 h-6 my-2 rounded"></div>
        </div>
        <div className="skeleton-card-container my-8 mx-8">
          <div className="skeleton-card bg-slate-200 w-80 h-40 rounded-md"></div>
          <div className="skeleton-text bg-slate-200 w-60 h-6 my-2 rounded"></div>
          <div className="skeleton-text bg-slate-200 w-44 h-6 my-2 rounded"></div>
        </div>
        <div className="skeleton-card-container my-8 mx-8">
          <div className="skeleton-card bg-slate-200 w-80 h-40 rounded-md"></div>
          <div className="skeleton-text bg-slate-200 w-60 h-6 my-2 rounded"></div>
          <div className="skeleton-text bg-slate-200 w-44 h-6 my-2 rounded"></div>
        </div>
      </div>
    </div>
  );
}