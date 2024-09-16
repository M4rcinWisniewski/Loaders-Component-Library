type PropsType = {
    choseVariant: string;
  };
  
  export default function Default({ choseVariant }: PropsType) {
    const variants: Record<string, string> = {
      default:
        "w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin",
      secondary:
        "w-12 h-12 border-4 border-red-500 border-t-transparent border-solid rounded-full animate-spin",
    };
  
    return (
      <main className="flex items-center justify-center">
        <div className={variants[choseVariant] || choseVariant}></div>
      </main>
    );
  }
  