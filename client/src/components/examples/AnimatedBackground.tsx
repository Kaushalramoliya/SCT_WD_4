import AnimatedBackground from '../AnimatedBackground';

export default function AnimatedBackgroundExample() {
  return (
    <div className="relative h-screen">
      <AnimatedBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">Animated Background</h1>
          <p className="text-muted-foreground mt-2">Beautiful floating orbs and geometric shapes</p>
        </div>
      </div>
    </div>
  );
}
