export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-40 right-20 w-80 h-80 bg-chart-2/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-chart-3/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-chart-4/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/10 animate-rotate-slow">
        <div className="absolute inset-0 border-2 border-chart-2/10 rotate-45" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-chart-3/10 animate-rotate-slow" style={{ animationDelay: "5s", animationDirection: "reverse" }}>
        <div className="absolute inset-0 border-2 border-primary/10 rotate-45" />
      </div>
    </div>
  );
}
