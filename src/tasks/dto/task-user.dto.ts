export type TaskUserRequestDTO = {
    userId: string;
    title: string;
    description: string;
    startAt: Date;
    endAt: Date;
    priority: 'BAIXA' | 'MEDIA' | 'ALTA';
    status: 'PENDENTE' | 'ANDAMENTO' | 'CONCLUIDO';
}

export type TaskUserResponseDTO = {
    id: string; 
}