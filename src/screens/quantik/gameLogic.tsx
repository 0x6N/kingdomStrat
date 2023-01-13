import Player, { PieceType } from './Player'
import intersection from 'lodash/intersection';


export const getArea = (x: number, y:number) =>{
    if(x <= 1){
        if(y <= 1) return 1;
        if(y <= 3 && y > 1) return 3;
    }else if(x <= 3 && x >= 2){
        if(y <= 1) return 2;
        if(y <= 3 && y > 1) return 4;
    }
}

export const isPieceAllowed = (board: any, x:number, y:number, piece : String, color: String) => {
 
}

export const hasWon = (board: any) => {
    let i, j;
    const needed = ['square', 'triangle', 'circle', 'cross'];
  
    // test rows
    for (j = 0; j <= 3; j++) {
      let row = [];
  
      for (i = 0; i <= 3; i++)
        row.push(board[i][j].piece);
  
      if (intersection(row, needed).length === 4)
        return true;
    }
  
    // test cols
    for (i = 0; i <= 3; i++) {
      let col = [];
  
      for (j = 0; j <= 3; j++)
        col.push(board[i][j].piece);
  
      if (intersection(col, needed).length === 4)
        return true;
    }
  
    // test zones
    for (let z = 0; z <= 3; z++) {
      let zone = [];
  
      for (i = 0; i <= 3; i++)
        for (j = 0; j <= 3; j++)
          if (getArea(i, j) === z)
            zone.push(board[i][j].piece);
  
      if (intersection(zone, needed).length === 4)
        return true;
    }
  
    return false;
  }