import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExpertiseListArgs } from "./args/AggregateExpertiseListArgs";
import { CreateManyAndReturnExpertiseListArgs } from "./args/CreateManyAndReturnExpertiseListArgs";
import { CreateManyExpertiseListArgs } from "./args/CreateManyExpertiseListArgs";
import { CreateOneExpertiseListArgs } from "./args/CreateOneExpertiseListArgs";
import { DeleteManyExpertiseListArgs } from "./args/DeleteManyExpertiseListArgs";
import { DeleteOneExpertiseListArgs } from "./args/DeleteOneExpertiseListArgs";
import { FindFirstExpertiseListArgs } from "./args/FindFirstExpertiseListArgs";
import { FindFirstExpertiseListOrThrowArgs } from "./args/FindFirstExpertiseListOrThrowArgs";
import { FindManyExpertiseListArgs } from "./args/FindManyExpertiseListArgs";
import { FindUniqueExpertiseListArgs } from "./args/FindUniqueExpertiseListArgs";
import { FindUniqueExpertiseListOrThrowArgs } from "./args/FindUniqueExpertiseListOrThrowArgs";
import { GroupByExpertiseListArgs } from "./args/GroupByExpertiseListArgs";
import { UpdateManyExpertiseListArgs } from "./args/UpdateManyExpertiseListArgs";
import { UpdateOneExpertiseListArgs } from "./args/UpdateOneExpertiseListArgs";
import { UpsertOneExpertiseListArgs } from "./args/UpsertOneExpertiseListArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ExpertiseList } from "../../../models/ExpertiseList";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateExpertiseList } from "../../outputs/AggregateExpertiseList";
import { CreateManyAndReturnExpertiseList } from "../../outputs/CreateManyAndReturnExpertiseList";
import { ExpertiseListGroupBy } from "../../outputs/ExpertiseListGroupBy";

@TypeGraphQL.Resolver(_of => ExpertiseList)
export class ExpertiseListCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateExpertiseList, {
    nullable: false
  })
  async aggregateExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExpertiseListArgs): Promise<AggregateExpertiseList> {
    return getPrismaFromContext(ctx).expertiseList.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyExpertiseListArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnExpertiseList], {
    nullable: false
  })
  async createManyAndReturnExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnExpertiseListArgs): Promise<CreateManyAndReturnExpertiseList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExpertiseList, {
    nullable: false
  })
  async createOneExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneExpertiseListArgs): Promise<ExpertiseList> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyExpertiseListArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExpertiseList, {
    nullable: true
  })
  async deleteOneExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneExpertiseListArgs): Promise<ExpertiseList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExpertiseList, {
    nullable: true
  })
  async findFirstExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExpertiseListArgs): Promise<ExpertiseList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExpertiseList, {
    nullable: true
  })
  async findFirstExpertiseListOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExpertiseListOrThrowArgs): Promise<ExpertiseList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExpertiseList], {
    nullable: false
  })
  async expertiseLists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExpertiseListArgs): Promise<ExpertiseList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExpertiseList, {
    nullable: true
  })
  async expertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExpertiseListArgs): Promise<ExpertiseList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExpertiseList, {
    nullable: true
  })
  async getExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExpertiseListOrThrowArgs): Promise<ExpertiseList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExpertiseListGroupBy], {
    nullable: false
  })
  async groupByExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExpertiseListArgs): Promise<ExpertiseListGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyExpertiseListArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExpertiseList, {
    nullable: true
  })
  async updateOneExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneExpertiseListArgs): Promise<ExpertiseList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExpertiseList, {
    nullable: false
  })
  async upsertOneExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneExpertiseListArgs): Promise<ExpertiseList> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
