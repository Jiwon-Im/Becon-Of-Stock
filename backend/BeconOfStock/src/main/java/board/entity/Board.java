package board.entity;

import config.BaseEntity;
import member.entity.Member;

import com.ssafy.beconofstock.strategy.entity.Strategy;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
public class Board extends BaseEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    @OneToOne(fetch = FetchType.LAZY)
    private Strategy strategy;

    private String title;
    private String content;
    private Long hit;
    private Long likeNum;
    private Long commentNum;

    public void increaseHit() { this.hit += 1; }

    public void increaseCommentNum() {
        this.commentNum += 1;
    }
    public void decreaseCommentNum(int num) {
        this.commentNum -= num;
    }

    public void increaseLikeNum() { this.likeNum += 1;}
    public void decreaseLikeNum() { this.likeNum -= 1; }

}
