import { toast } from 'sonner';

export function NewCredit() {
  return (
    <div>
      pagina de novo credito
      <button onClick={() => toast('ola teste')}>Mostrar mensagem</button>
    </div>
  );
}
